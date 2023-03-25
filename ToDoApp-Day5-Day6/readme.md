# These ar the tasks for Day4 and Day5
## Day4
### Authorization and Authentication

#### Authentication
With authentcation, I have created the sign-up and sign-in functionality and it is in the ./routes/userRoutes files

#### Authorization
With authorization, There is the verify.js file and it checks on the token created on the sign in. The logged-in user is authorized to create, delete, and upadate a to-do.

## Day5
### Creating relationships and improving the files
I used .env file to store sensitive data, and used lodash along with mongoose toJson function to prevent the return of sensitive data. I have also added the authorization function to get the to-dos for the logged user only.
