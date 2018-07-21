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
        })
    }
}
