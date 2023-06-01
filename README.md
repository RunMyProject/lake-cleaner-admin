# Lake Cleaner Admin

Lake Cleaner Admin is a project aimed at addressing the issue of pollution in Italian lakes, particularly in preparation for the hot summer of 2023. The goal is to develop an automated solution using intelligent plastic ducks to clean the lakes. 

During a brainstorming session with AI, the idea of using these plastic ducks equipped with suction capabilities to remove surface dirt emerged as a viable solution. Each duck is uniquely identified by a name and color. They are designed with an internal vacuum system to collect debris from the lake's surface. The collected waste is stored in containers, which are measured in kilograms and tracked in a database. 

The ducks are equipped with electric power and a propeller to navigate the water, similar to aquatic drones. They also have a self-emptying mechanism, where they approach a designated discharge point (potentially located on the lake's shore) to unload the collected waste. Once emptied, the ducks resume their autonomous cleaning operations. If the battery runs low, the ducks automatically navigate to a charging point before completing the discharge process. Any malfunctions or issues are reported through satellite data transmission.

The project involves developing a decentralized server infrastructure to collect and store data from the ducks, including their GPS coordinates, loading/unloading status, and troubleshooting logs. Lake Cleaner Admin features an administrative panel that primarily consists of two layers: a backend layer built with Node.js, RESTful services, and a MongoDB database, and a front-end layer that is still in the brainstorming phase.

The administrative panel handles various tasks such as managing duck data, cataloging, CRUD operations for informational data, monitoring sensor statuses, and displaying duck positions on GPS maps. It also keeps track of lakes associated with the project.

Lake Cleaner Admin is an innovative project that aims to experiment with cutting-edge techniques using Node.js and REST microservices to develop a forward-thinking front-end solution. We are actively seeking investors who are willing to take risks and join us in this exciting venture.

## Getting Started

To set up the Lake Cleaner Admin backend and start the server, follow the instructions below:

1. Clone the repository to your local machine.
2. Install the required dependencies using npm.
3. Configure the MongoDB connection in the `index.js` file.
4. Run `npm start` to start the server.
5. Access the administrative panel through the specified port (default is 3000).

Please note that the front-end layer is still under development.

## Contributing

We welcome contributions from the community! If you have any suggestions, bug reports or feature requests, please submit an issue.

## License

Lake Cleaner Admin is released under the [MIT License](https://opensource.org/licenses/MIT).
