function printHelp() {
  console.log(`



`);
}

function parseOptions(args) {
  const options = {};
  for (let i = 0; i < args.length; i += 1) {
    const current = args[i];
    if (current.startsWith("--")) {
      const key = current.slice(2);
      const value = args[i + 1];
      options[key] = value;
      i += 1;
    } else if (current.startsWith("-")) {
      const key = current.slice(1);
      const value = args[i + 1];
      options[key] = value;
      i += 1;
    }
  }
  return options;
}

function errorExit(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

module.exports = { printHelp, parseOptions, errorExit };
