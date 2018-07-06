export const Process = [
  {},
  // DEVELOPMENT
  {
    name: 'Development',
    subProcess: [
      {
        name: 'Design',
        status: false,
        type: 'list',
        data: [
          {
            display: true,
            label: 'Review acceptance criteria and user story description'
          },
          {
            display: false,
            label: 'Produce design to meet the specifications'
          },
          {
            display: false,
            label: 'Record defects found'
          }
        ]
      },
      {
        name: 'Design Review',
        status: false,
        type: 'checklist',
        data: [
          {
            category: 'Complete',
            list: [
              'Verify the design is a solution for the user story specifications',
              'Verify all the data and external resources for development are needed'
            ],
            answer: null
          },
          {
            category: 'Logic',
            list: [
              'Verify loops are propely iniciated and its increments lead to the solution',
              'Verify there are no unwanted logical operators(if, switch, loops, etc)'
            ],
            answer: null
          },
          {
            category: 'Naming',
            list: [
              'Verify planned names for variables are descriptive and compliant with standards',
              'Verify planned names for methods are descriptive and compliant with standards'
            ],
            answer: null
          },
          {
            category: 'Data Typing',
            list: [
              'Verify data types for variables are the correct for the solution',
              'Verify data types for methods are the correct for the solution'
            ],
            answer: null
          },
          {
            category: 'Functionality',
            list: ['Verify methods have the parameters they need', 'Verify method returns expected result'],
            answer: null
          }
        ]
      },
      {
        name: 'Code',
        status: false,
        type: 'list',
        data: []
      },
      {
        name: 'Code Review',
        status: false,
        type: 'checklist',
        data: []
      },
      ,
      {
        name: 'Compile',
        status: false,
        type: 'list',
        data: []
      },
      {
        name: 'Test',
        status: false,
        type: 'list',
        data: []
      }
    ]
  }
];
