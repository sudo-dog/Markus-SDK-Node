import * as request from 'request';
import * as FormData from 'form-data';

export default class Markus {
    private domain: string;
    public constructor(domain: string) {
        this.domain = domain;
    }

    public UploadSingleBuffer(buffer: Buffer): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            var r = request.post(this.domain + '/m/buffer', (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    resolve(body);
                    console.log(body);
                } else {
                    console.log(error, body);
                }
            });
            var form = r.form()
            form.append('image', buffer, {
                filename: '1.jpg',
                contentType: 'image/jpeg',
            });
            form.append('tags', JSON.stringify(['sdk']));
            form.append('key', 'test');
        });
    }

    public UploadMultipleBuffer(buffers: Buffer[]): Promise<any> {
        const resultList: any[] = [];
        const Upload = (cb: () => any) => {
            const buffer = buffers.shift();
            if (buffer) {
                this.UploadSingleBuffer(buffer).then((result: any) => {
                    resultList.push(result);
                    Upload(cb);
                })
            } else {
                cb();
            }
        }
        return new Promise<any>((resolve, reject) => {
            const loop = buffers.length <= 5 ? buffers.length : 5;
            for (let i = 0; i < loop; i++) {
                Upload(() => {
                    if (resultList.length === buffers.length) {
                        console.log(resultList);
                    }
                });
            }
        });
    }
}
