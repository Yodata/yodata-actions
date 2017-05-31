// @flow

declare type URL = string
declare type CLASS =
  | 'Thing'
  | 'Person'
  | 'Event'
  | 'Action'
  | 'Place'
  | 'Organization'


declare type ActionStatusType =
  | 'ActiveActionStatus'
  | 'PotentialActionStatus'
  | 'CompletedActionStatus'
  | 'FailedActionStatus';

export interface Thing {
  type: CLASS,
  name?: string,
  description?: string,
  url?: URL
}

export interface EntryPoint {
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
  agent?: Thing,
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
  url: URL
}
