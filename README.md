# Ewally challenge - Boleto API

## Introduction

This challenge was made to validate boletos and receive the data contained in the digitable line. It validates wether the boleto is valid via the general validation digit and the field validation digit. It works for both types of boletos. The receiving data will vary based on the type of boleto.

## How to install

Run the command line "yarn" in the terminal to install dependencies

## How to use it

Start by changing the .env.example to either .env.relase or .env.dev (remember to change the port to your desired port inside the file).

Your route should be http://localhost:PORT/boleto/DIGITABLELINE

ex: http://localhost:8080/boleto/21290001192110001210904475617405975870000002000

## Tests

To run tests simply run the command line "yarn test" in the terminal
