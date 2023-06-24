import React from 'react';
import styles from './styles.module.scss';
const HelloMessage = ({ name }) => <h1 className={ styles.Root }>Hello, {name}!</h1>;
export default HelloMessage;
