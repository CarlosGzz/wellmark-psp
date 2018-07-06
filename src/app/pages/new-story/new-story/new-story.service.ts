import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

const planningProcessDefault = {
  name: 'Planning',
  status: false,
  subProcess: [
    {
      name: 'Planning',
      status: false,
      type: 'list',
      data: [
        {
          display: true,
          label: 'Obtain acceptance criteria for user story'
        },
        {
          display: false,
          label: 'Ensure the criteria and requirements are clear and unambiguous'
        },
        {
          display: false,
          label: 'Resolve any questions related to the user story'
        },
        {
          display: false,
          label: 'Map dependencies'
        }
      ]
    },
    {
      name: 'Estimation',
      status: false,
      type: 'estimation',
      data: [
        {
          display: true,
          label: 'Estimate time'
        },
        {
          display: false,
          label: 'Start the Project Plan Summary Template'
        },
        {
          display: false,
          label: 'Record defects found'
        },
        {
          display: false,
          label: 'Record time spent in Project Summary Template'
        }
      ],
      estimatedTime: 0
    }
  ]
};

const developmentProcessDefault = {
  name: 'Development',
  status: false,
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
};

const postMortemProcessDefault = {
  name: 'Post-Mortem',
  status: false,
  subProcess: [
    {
      name: 'Defect Recording',
      status: false,
      type: 'list',
      data: []
    },
    {
      name: 'Defect Data Consistency ',
      status: false,
      type: 'list',
      data: []
    },
    {
      name: 'Time',
      status: false,
      type: 'list',
      data: []
    },
    {
      name: 'Commit',
      status: false,
      type: 'list',
      data: []
    }
  ]
};
@Injectable()
export class NewStoryService {
  story$: Observable<any>;
  private stroySubject: BehaviorSubject<any>;

  planningProcess$: Observable<any>;
  private planningProcessSubject: BehaviorSubject<any>;

  developmentProcess$: Observable<any>;
  private developmentProcessSubject: BehaviorSubject<any>;

  postmortemProcess$: Observable<any>;
  private postmortemProcessSubject: BehaviorSubject<any>;

  constructor() {
    this.stroySubject = new BehaviorSubject(null);
    this.story$ = this.stroySubject.asObservable();

    this.planningProcessSubject = new BehaviorSubject(planningProcessDefault);
    this.planningProcess$ = this.planningProcessSubject.asObservable();

    this.developmentProcessSubject = new BehaviorSubject(developmentProcessDefault);
    this.developmentProcess$ = this.developmentProcessSubject.asObservable();

    this.postmortemProcessSubject = new BehaviorSubject(postMortemProcessDefault);
    this.postmortemProcess$ = this.postmortemProcessSubject.asObservable();
  }

  set planningProcess(process) {
    this.planningProcessSubject.next(process);
  }
  set developmentProcess(process) {
    this.planningProcessSubject.next(process);
  }
  set postMortemProcess(process) {
    this.planningProcessSubject.next(process);
  }
}
