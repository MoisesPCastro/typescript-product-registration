import multer from 'multer';
import path from 'path';
import cripto from 'crypto';
const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads');

export default {
  directory: uploadFolder,
  storage: multer.diskStorage({
    destination: uploadFolder,
    filename(_request, file, callback) {
      const fileHash = cripto.randomBytes(1).toString('hex');
      const filename = `${fileHash}-${file.originalname}`;

      callback(null, filename);
    }
  })
};
