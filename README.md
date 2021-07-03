# Dating app

[User stories](https://github.com/huy-ngoduc/DatingApp/wiki)

[Basic design](https://github.com/huy-ngoduc/DatingApp/wiki/Basic-design)

## How to run
1. `npm install`
2. Go to `client` foler and run: `npm run build`
`npm run build` will compile then copy the compiled client app into `API\wwwroot`

3. Go to `API` folder
4. Update the `connectionString` in the `appsettings.json`
5. Register Cloudinary account
6. Insert Cloudinary configuration section

`"CloudinarySettings": {
    "CloudName": "",
    "ApiKey": "",
    "ApiSecret": ""
  }`
  
8. Run: `dotnet run`
9. Go to `http://localhost:5000/` and enjoy


