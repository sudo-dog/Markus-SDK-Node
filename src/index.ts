import * as request from 'request';
import * as path from 'path';

export default class Markus {
    private domain: string;
    public constructor(domain: string) {
        this.domain = domain;
    }

    public UploadSingleBuffer(buffer: Buffer, original: string, tags: string[], key?: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const option = key ? {
                headers: {
                    'authorization': 'Basic' + key,
                }
            } : {};
            const r = request.post(this.domain + '/m/buffer', option, (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    body = JSON.parse(body);
                    if (body.data) {
                        resolve(body.data);
                    }
                } else {
                    reject(error);
                }
            });
            const form = r.form();
            const extName = path.extname(original);
            form.append('image', buffer, {
                filename: original,
                contentType: 'image/' + extName.substring(1, extName.length),
            });
            form.append('tags', JSON.stringify(tags));
        });
    }

    public UploadMultipleBuffer(buffers: Buffer[], prefix: string, extName: string, tags: string[], tic?: (count: number) => any, key?: string): Promise<any> {
        const resultList: any[] = [];
        let count = 0;
        const len = buffers.length;
        const Upload = (callback: () => any, whenErr: (err: Error) => any) => {
            const buffer = buffers.shift();
            if (buffer) {
                const originalName = prefix + (count++) + '.' + extName;
                this.UploadSingleBuffer(buffer, originalName, tags, key).then((result: any) => {
                    resultList.push(result);
                    if (tic) tic(resultList.length);
                    Upload(callback, whenErr);
                }).catch((err: Error) => {
                    whenErr(err);
                });
            } else {
                callback();
            }
        }
        return new Promise<any>((resolve, reject) => {
            const loop = buffers.length <= 5 ? buffers.length : 5;
            for (let i = 0; i < loop; i++) {
                Upload(() => {
                    if (resultList.length === len) {
                        resolve(resultList);
                    }
                }, (err: Error) => {
                    reject(err);
                });
            }
        });
    }
}
