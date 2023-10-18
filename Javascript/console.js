console.log('hello');
console.error('error');
console.warn('warning');
console.table({name: 'test',age: '23' });
console.group('test group');
console.log('hello');
console.error('error');
console.warn('warning');
console.table({name: 'test',age: '23' });
console.groupCollapsed();
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green';

console.log('%cHello World', styles);
