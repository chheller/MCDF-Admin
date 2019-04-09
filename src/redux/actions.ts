import { ILoginActions } from '../components/Login/redux/actions';
import { Action } from 'redux';

export type IRootActions = ILoginActions | Action;
