import { getRepository } from 'typeorm';
import { Upload } from './shared/shared.input';
import {
  access,
  constants,
  copyFileSync,
  createWriteStream,
  existsSync,
  mkdirSync,
  unlinkSync,
} from 'fs';
import { UnauthorizedException } from '@nestjs/common';
import { join } from 'path';
type FileParams = {
  filename: string;
  mimetype: string;
};

export const publicDir = () => join(__dirname, '..', 'public/');
export const uniqId = async (repo: string): Promise<number> => {
  let id = 1,
    lastId = 0;

  const repoLower = repo.toLowerCase(); /**Table alias, example: gateways*/

  const all = await getRepository(repo)
    .createQueryBuilder(repoLower)
    .select(repoLower + '.id')
    .withDeleted()
    .orderBy(repoLower + '.id', 'ASC')
    .getRawMany();

  Object.values(all).forEach((val: Record<string, number>) => {
    lastId = Object.values(val)[0];
    if (lastId != id) return false; /**break loop**/
    id++;
  });
  /**Make sure that last id !=id, in the case of 1,2,3,...completed number*/
  return id != lastId ? id : ++id;
};
export const upload = async (
  file: Upload,
  dossier: string,
  id: number | number,
): Promise<FileParams> => {
  const { createReadStream, filename, mimetype } = await file;

  const m_filename = id + filename.substr(-20);

  const path = `${publicDir()}${dossier}/`;
  if (!existsSync(path)) mkdirSync(path, { recursive: true });

  const uploaded = await new Promise((resolve, reject) =>
    createReadStream()
      .pipe(createWriteStream(`${path}${m_filename}`))
      .on('finish', () => resolve(true))
      .on('error', () => reject(false)),
  );
  if (!uploaded)
    throw new UnauthorizedException(`upload file ${filename} failed`);

  return { filename: m_filename, mimetype };
};
export const removeFile = (filename: string): boolean => {
  const path = publicDir() + filename;
  let removed = false;
  access(path, constants.F_OK, (err) => {
    if (!err) {
      try {
        unlinkSync(path);
        removed = true;
      } catch {}
    }
  });
  return removed;
};

export const moveFile = (
  source: string,
  destination: string,
  filename: string,
) => {
  const destDir = `${publicDir()}${destination}/`;
  if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true });
  copyFileSync(publicDir() + source, destDir + filename);
  removeFile(source);
};
