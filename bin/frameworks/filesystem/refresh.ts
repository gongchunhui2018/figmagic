import trash from 'trash';

import { createFolder } from './createFolder';

import { ErrorRefresh } from '../errors/errors';

/**
 * @description Refresh a folder by trashing it first, then creating a new folder
 */
export async function refresh(path: string): Promise<void> {
  try {
    if (!path) throw new Error(ErrorRefresh);

    await trash([`./${path}`]);
    createFolder(path);
  } catch (error) {
    throw new Error(error);
  }
}
