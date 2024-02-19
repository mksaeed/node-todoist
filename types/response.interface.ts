interface  ResponseInterface {
    status: (arg0: number) => {
        (): any; new(): any; json: {
            (arg0: { status: boolean; message: string; data?: any; }
            ): any; new(): any; }; }; }