class HttpAxiosServiceMock {
    doGet( url: string ) {
        return new Promise( (resolve, reject) => {
            let mockData = {
                teams: [
                    {
                        id: 1,
                        name: 'Russia',
                        iso2: 'ru'
                    },
                    {
                        id: 2,
                        name: 'Spain',
                        iso2: 'es'
                    }
                ]
            };
            resolve(mockData);
        });
    }
}

export default HttpAxiosServiceMock;