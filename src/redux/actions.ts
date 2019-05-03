import { ILoginActions } from '../components/Login/data/redux/actions';
import { Action } from 'redux';

export type IRootActions = ILoginActions | Action;
