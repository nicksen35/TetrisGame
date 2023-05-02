const cols = 10;
const rows = 19;
const blocksize = 30;
const key = {
    left: 37,
    right:39,
    down:40
}
Object.freeze(key);

const pieces = [
    {
      label: 'I',
      shape: [
        [1, 1, 1, 1]
      ],
      color: 'cyan',
      boundary: 3
    },
    {
      label: 'J',
      shape: [
        [0, 0, 2],
        [2, 2, 2]
      ],
      color: 'blue',
      boundary: 2
    },
    {
      label: 'L',
      shape: [
        [3, 0, 0],
        [3, 3, 3]
      ],
      color: 'orange',
      boundary: 2
    },
    {
      label: 'O',
      shape: [
        [4, 4],
        [4, 4]
      ],
      color: 'yellow',
      boundary: 1
    },
    {
      label: 'S',
      shape: [
        [0, 5, 5],
        [5, 5, 0]
      ],
      color: 'green',
      boundary: 1
    },
    {
      label: 'T',
      shape: [
        [0, 6, 0],
        [6, 6, 6]
      ],
      color: 'purple',
      boundary: 2
    },
    {
      label: 'Z',
      shape: [
        [7, 7, 0],
        [0, 7, 7]
      ],
      color: 'red',
      boundary: 1
    }
  ];
  