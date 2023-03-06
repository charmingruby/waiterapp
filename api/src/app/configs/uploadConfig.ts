import multer from 'multer';

import { resolve } from 'path';

export default{
    upload(folder: string) {
        return{
            storage: multer.diskStorage({
                destination: (req, file, callback) => {
                  callback(null, resolve(__dirname, '..', '..', '..', folder))
                },
                filename: (req, file, callback) => {
                    return callback(null, `${Date.now()}-${file.originalname}`);
                }
            })
        };
    }
};
