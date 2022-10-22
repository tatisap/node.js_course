const secure = true;
const sendSuccessfully = true;

const createConnection = () => {
  console.log('Opening connection...');

  return new Promise((resolve) => {
    setTimeout(() => {
      const connection = {
        port: 80,
        secure,
        send: (data) => {
          console.log(data);
          return sendSuccessfully;
        },
        serializeData: (data) => JSON.stringify(data),
      };

      resolve(connection);
    }, 2000);
  });
};

function prepareData(data) {
  console.log('Preparing data...');

  return new Promise((resolve) => {
    data.prepared = true;
    setTimeout(() => resolve(data), 2000);
  });
}

function sendData(connection, data) {
  console.log('Sending data...');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!connection.secure) {
        return reject(new Error("Can't send data with insecure connection"));
      }
      if (!connection.send(data)) {
        return reject(new Error('Error during sending'));
      }
      resolve(data);
    }, 2000);
  });
}

async function main() {
  try {
    const connection = await createConnection();
    const data = {
      status: 200,
      message: 'Hello, mister!',
      prepared: false,
    };
    const preparedData = await prepareData(data);
    const serializedData = connection.serializeData(preparedData);
    await sendData(connection, serializedData);
    console.log('Sent');
  } catch (error) {
    console.error(error);
  }
}

main();
