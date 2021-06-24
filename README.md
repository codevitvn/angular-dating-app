# DatingApp

This is an Dating web application.

## Stories: 
1. Users should be able to log in
2. Users should be able to register
3. Users should be able to view other users
4. Users should be able to privately message other users
5. Users should be notified when they are received a message while online

## Basic design
The app is divided into two components
1. API
This is a Web APi server that is using AspNetCore API and EntityFrameworkCore (NET5). We use Repository and Unit Of Work as a abstraction layer above of the EntityFramework. We also use the Identity as the user storage.
The API also support for paging, storing and filtering.
2. Client
This is the client web that uses Angular. It gets the data from the API then show to users. It also receives the data from the users then sends back the API to store.
3. To notice users when they are received a message while online, we use SignalR

## Tech stack
1. AspNetCore API (.NET5)
2. EntityFrameworkCore
3. Identity
4. Angular 12.0.3
5. SignalR
6. Repository pattern
7. Unit Of Work

## How to run
1. `npm install`
2. Go to `client` foler and run: `npm build`
`npm build` will compile then copy the compiled client app into `API\wwwroot`

3. Go to `API` folder
4. Update the `connectionString` in the `appsettings.json`
5. Run: `dotnet run`
6. Go to `http://localhost:5000/` and enjoy


