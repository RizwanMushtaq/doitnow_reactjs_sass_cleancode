const APIEndPoints = {}

//Endpoints for Local Server
// APIEndPoints.userLogin = 'http://localhost:8090/users/verify'
// APIEndPoints.userRegistration = 'http://localhost:8090/users/registerUser'

// APIEndPoints.getTodosForDateSelected = 'http://localhost:8090/todos/read'
// APIEndPoints.writeTodoItem = 'http://localhost:8090/todos/write'
// APIEndPoints.updateDoneState = 'http://localhost:8090/todos/updateDoneState'
// APIEndPoints.deleteTodoItem = 'http://localhost:8090/todos/deleteItem'
// APIEndPoints.getAllTodosForUser = 'http://localhost:8090/todos/readAllItemsForUser'


//Endpoints for Heruku Server
APIEndPoints.userLogin = 'https://doitnow-restapi-heroku.herokuapp.com/users/verify'
APIEndPoints.userRegistration = 'https://doitnow-restapi-heroku.herokuapp.com/users/registerUser'

APIEndPoints.getTodosForDateSelected = 'https://doitnow-restapi-heroku.herokuapp.com/todos/read'
APIEndPoints.writeTodoItem = 'https://doitnow-restapi-heroku.herokuapp.com/todos/write'
APIEndPoints.updateDoneState = 'https://doitnow-restapi-heroku.herokuapp.com/todos/updateDoneState'
APIEndPoints.deleteTodoItem = 'https://doitnow-restapi-heroku.herokuapp.com/todos/deleteItem'
APIEndPoints.getAllTodosForUser = 'https://doitnow-restapi-heroku.herokuapp.com/todos/readAllItemsForUser'

export default APIEndPoints
