# Use Node.js LTS image
FROM node:20

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY app/package*.json ./
RUN npm install

# Copy app code
COPY app/ .

# Expose por
EXPOSE 3000

# Run app
CMD ["npm", "start"]
