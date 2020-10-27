// @packages
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');

// Util to tell what an object "is"
const is = Function.prototype.call.bind(Object.prototype.toString);

// For more simple understanding and fancy code
const print = console.log.bind(this);

// Default options
const defaultOptions = {
    filePath: null,
    indentSpaces: 4,
    timestampFormat: 'DD-MM-YYYY HH:mm:ss',
    writeInFile: false
};

// Options keys
const optionsKeys = {
    filePath: 'filePath',
    indentSpaces: 'indentSpaces',
    timestampFormat: 'timestampFormat',
    writeInFile: 'writeInFile'
};

// Util constants
const BREAK_LINE = '\r\n';
const DECIMAL_PRECISION = 3;
const INDENT = '';
const ONE_MILLION = 1000000;
const SEPARATOR = ' | ';
const SPACE = ' ';

// Log types
const types = {
    danger: chalk.bold.bgRed('danger'),
    error: chalk.bold.red('error'),
    info: chalk.bold.bgCyan('info'),
    log: chalk.bold.cyan('log'),
    warning: chalk.bold.yellow('warning')
};

// String log tyés
const strTypes = {
    danger: 'danger',
    error: 'error',
    info: 'info',
    log: 'log',
    warning: 'warning'
};

class Waveless {
    /**
     * Represents Waveless class.
     * @constructor
     * @param {Object{}} options - The options for the class.
     */
    constructor(options) {
        this._options = {};
        this.setOptions(options);
    }

    /**
     * Method to set options for the class.
     * @param {Object{}} options - The options of the class.
     */
    setOptions(options) {
        if (options) {
            Object.keys(defaultOptions).forEach((key) => {
                if (!Object.prototype.hasOwnProperty.call(options, key)) {
                    this._options = {
                        ...options,
                        [key]: defaultOptions[key]
                    };
                }

                if (key === optionsKeys.writeInFile) {
                    this._options = {
                        ...options,
                        [optionsKeys.filePath]:
                            (Object.prototype.hasOwnProperty.call(options, optionsKeys.filePath))
                                ? options[optionsKeys.filePath]
                                : defaultOptions.filePath
                    };
                }
            });

            this._options = options;
        } else {
            this._options = defaultOptions;
        }
    }

    /**
     * Method get to return the current options of the class.
     */
    get options() {
        return this._options;
    }

    /**
     * Method to return a current timestamp based on
     * the timestampFormat param from the options class.
     */
    timestampHumanReadable() {
        return moment().format(this._options.timestampFormat);
    }

    /**
     * Method to return the execution time in milliseconds.
     */
    // eslint-disable-next-line class-methods-use-this
    executionTime() {
        const start = process.hrtime();
        // Divide by a million to get nanoseconds to milliseconds
        const elapsed = process.hrtime(start)[1] / ONE_MILLION;
        return `${elapsed.toFixed(DECIMAL_PRECISION)}ms`;
    }

    /**
     * Method to write the log into a specified file in options class.
     * @param {String} timestamp - Timestamp of the event.
     * @param {String} type - Type of the log.
     * @param {*} data - The input data specified by the user.
     * @param {String} executionTime - The execution time of the event.
     */
    writeLog(timestamp, type, data, executionTime) {
        const dataToDisplay = JSON.stringify(data, null, this._options.indentSpaces);
        const dataToAppend = `${timestamp}${SEPARATOR}${type}${SEPARATOR}${dataToDisplay}${executionTime}${BREAK_LINE}`;

        if (fs.existsSync(this._options.filePath)) {
            // Append data to file if already exists
            fs.appendFile(this._options.filePath, dataToAppend, (err) => {
                if (err) throw err;
            });
        } else {
            // Create new file and write current data
            fs.writeFile(this._options.filePath, dataToAppend, (err) => {
                if (err) throw err;
            });
        }
    }

    /**
     * Method to make the print in the console and write in the file if necessary.
     * @param {String} type - Type of the log.
     * @param {*} data - The input data specified by the user.
     * @param {boolean} showAsObject - Show data as object in the console.
     */
    make(data, type, showAsObject) {
        const dataToDisplay = JSON.stringify(data, null, this._options.indentSpaces);
        const timestamp = this.timestampHumanReadable();
        const executionTime = this.executionTime();

        print(INDENT.padStart(this._options.indentSpaces, SPACE) + chalk.bold.green(timestamp),
            types[type],
            showAsObject
                ? `${is(data)}${SPACE}${chalk.bold.red(executionTime)}${BREAK_LINE}${dataToDisplay}`
                : data + SPACE + chalk.bold.red(executionTime));

        if (this._options.writeInFile) {
            this.writeLog(timestamp, type, data, executionTime);
        }
    }

    /**
     * Method to make a "danger" print in the console.
     * @param {*} data - The input data specified by the user.
     * @param {boolean} showAsObject - Show data as object in the console.
     */
    danger(data, showAsObject) {
        this.make(data, strTypes.danger, showAsObject);
    }

    /**
     * Method to make a "error" print in the console.
     * @param {*} data - The input data specified by the user.
     * @param {boolean} showAsObject - Show data as object in the console.
     */
    error(data, showAsObject) {
        this.make(data, strTypes.error, showAsObject);
    }

    /**
     * Method to make a "info" print in the console.
     * @param {*} data - The input data specified by the user.
     * @param {boolean} showAsObject - Show data as object in the console.
     */
    info(data, showAsObject) {
        this.make(data, strTypes.info, showAsObject);
    }

    /**
     * Method to make a "log" print in the console.
     * @param {*} data - The input data specified by the user.
     * @param {boolean} showAsObject - Show data as object in the console.
     */
    log(data, showAsObject) {
        this.make(data, strTypes.log, showAsObject);
    }

    /**
     * Method to make a "warning" print in the console.
     * @param {*} data - The input data specified by the user.
     * @param {boolean} showAsObject - Show data as object in the console.
     */
    warning(data, showAsObject) {
        this.make(data, strTypes.warning, showAsObject);
    }
}

module.exports = (options) => new Waveless(options);
