## Getting Started

Follow these instructions to set up and run the application on your local machine.

### Prerequisites

* Node.js and npm: Make sure you have Node.js and npm installed on your system. You can download them from the official Node.js website ([https://nodejs.org](https://nodejs.org/)).
* MongoDB: Install MongoDB on your system and make sure it's running on the default port (27017). You can download MongoDB from the official website

### Installing:-

Clone the repository to your local machine.

Navigate to the project directory.

Install the required packages



### Configuration

1. MongoDB Connection: Open the `src/config/db.ts` file and replace the `your_database_name` placeholder with the name of your MongoDB database in the `dburl` constant in .env file.

### Running the Application

To run the application, use the following command:

npm run build

npm run dev

npm start

This will start the server on port 3000. You can access the API at `http://localhost:5000/v1/data`.


### How it Works

1. Model (user.model.ts): The `Data` model defines the schema for the data that will be stored in the MongoDB database. It includes a `value` field to store the data value and a `timestamp` field to store the date and time when the data was added.
2. Controller (user.controller.ts): The `getData` controller fetches the last 10 data entries from the database, sorted by the `timestamp` field in descending order. It sends the data back as a JSON response.
3. Routes (user.routes.ts): The route handles the incoming HTTP GET request to `/api/data` and calls the `getData` controller to retrieve the data.

## Evaluation Criteria

The application will be evaluated based on the following criteria:

* **Correctness of Code** : The code should be written accurately and free from logical errors.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

* The application uses Node.js, Express, TypeScript, MongoDB.

---

Feel free to modify this README file according to your specific application and requirements. The above content provides a general overview of the project, its components, and how to set it up. Additionally, you can add information about the frontend, charts library, and any other relevant details for a complete documentation.
