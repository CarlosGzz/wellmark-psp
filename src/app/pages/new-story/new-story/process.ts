export interface Story {
  id: string;
  name: string;
  userId: string;
  process: Array<Process>;
}

export interface Process {
  id: string;
  name: string;
  status: boolean;
  subProcess: Array<SubProcess>;
}

export interface SubProcess {
  name: string;
  type: string;
  priority: number;
  status: boolean;
  data: any;
}

export interface Bug {
  id: string;
  type: string;
  currentProcess: string;
  originProcess: string;
  description: string;
  startTime: any;
  endTime: any;
}


