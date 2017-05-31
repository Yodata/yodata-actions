// @flow

declare type ActionStatusType =
  | 'ActiveActionStatus'
  | 'PotentialActionStatus'
  | 'CompletedActionStatus'
  | 'FailedActionStatus';

export interface Thing {
  type: string,
  name?: string,
  description?: string,
  url?: string
}

declare interface Person {
  type: 'Person'
}

declare interface Organization {
  type: 'Organization'
}

export interface EntryPoint extends Thing {
  type: 'EntryPoint',
  httpMethod: string,
  urlTemplate: string,
  contentType: string,
  actionPlatform: string,
  application: Thing,
  encodingType: string
}

export interface Action {
  type: string,
  actionStatus?: ActionStatusType,
  agent?: Person | Organization,
  endTime?: Date,
  error?: Thing,
  instrument?: Thing,
  location?: Thing,
  object?: Thing,
  participant?: Thing,
  result?: Thing,
  startTime?: Date,
  target?: EntryPoint,
  id: string,
  url: string
}
