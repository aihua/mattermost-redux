// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import assert from 'assert';

import {UserTypes, PostTypes} from 'action_types';
import reducer from 'reducers/entities/users';

describe('Reducers.users', () => {
    describe('profilesInChannel', () => {
        it('initial state', () => {
            const state = undefined;
            const action = {};
            const expectedState = {
                profilesInChannel: {},
            };

            const newState = reducer(state, action);
            assert.deepEqual(newState.profilesInChannel, expectedState.profilesInChannel);
        });

        it('UserTypes.RECEIVED_PROFILE_IN_CHANNEL, no existing profiles', () => {
            const state = {
                profilesInChannel: {},
            };
            const action = {
                type: UserTypes.RECEIVED_PROFILE_IN_CHANNEL,
                data: {
                    id: 'id',
                    user_id: 'user_id',
                },
            };
            const expectedState = {
                profilesInChannel: {
                    id: new Set().add('user_id'),
                },
            };

            const newState = reducer(state, action);
            assert.deepEqual(newState.profilesInChannel, expectedState.profilesInChannel);
        });

        it('UserTypes.RECEIVED_PROFILE_IN_CHANNEL, existing profiles', () => {
            const state = {
                profilesInChannel: {
                    id: new Set().add('old_user_id'),
                    other_id: new Set().add('other_user_id'),
                },
            };
            const action = {
                type: UserTypes.RECEIVED_PROFILE_IN_CHANNEL,
                data: {
                    id: 'id',
                    user_id: 'user_id',
                },
            };
            const expectedState = {
                profilesInChannel: {
                    id: new Set().add('old_user_id').add('user_id'),
                    other_id: new Set().add('other_user_id'),
                },
            };

            const newState = reducer(state, action);
            assert.deepEqual(newState.profilesInChannel, expectedState.profilesInChannel);
        });

        it('UserTypes.RECEIVED_PROFILES_LIST_IN_CHANNEL, no existing profiles', () => {
            const state = {
                profilesInChannel: {},
            };
            const action = {
                type: UserTypes.RECEIVED_PROFILES_LIST_IN_CHANNEL,
                id: 'id',
                data: [
                    {
                        id: 'user_id',
                    },
                    {
                        id: 'user_id_2',
                    },
                ],
            };
            const expectedState = {
                profilesInChannel: {
                    id: new Set().add('user_id').add('user_id_2'),
                },
            };

            const newState = reducer(state, action);
            assert.deepEqual(newState.profilesInChannel, expectedState.profilesInChannel);
        });

        it('UserTypes.RECEIVED_PROFILES_LIST_IN_CHANNEL, existing profiles', () => {
            const state = {
                profilesInChannel: {
                    id: new Set().add('old_user_id'),
                    other_id: new Set().add('other_user_id'),
                },
            };
            const action = {
                type: UserTypes.RECEIVED_PROFILES_LIST_IN_CHANNEL,
                id: 'id',
                data: [
                    {
                        id: 'user_id',
                    },
                    {
                        id: 'user_id_2',
                    },
                ],
            };
            const expectedState = {
                profilesInChannel: {
                    id: new Set().add('old_user_id').add('user_id').add('user_id_2'),
                    other_id: new Set().add('other_user_id'),
                },
            };

            const newState = reducer(state, action);
            assert.deepEqual(newState.profilesInChannel, expectedState.profilesInChannel);
        });

        it('UserTypes.RECEIVED_PROFILES_IN_CHANNEL, no existing profiles', () => {
            const state = {
                profilesInChannel: {},
            };
            const action = {
                type: UserTypes.RECEIVED_PROFILES_IN_CHANNEL,
                id: 'id',
                data: {
                    user_id: {
                        id: 'user_id',
                    },
                    user_id_2: {
                        id: 'user_id_2',
                    },
                },
            };
            const expectedState = {
                profilesInChannel: {
                    id: new Set().add('user_id').add('user_id_2'),
                },
            };

            const newState = reducer(state, action);
            assert.deepEqual(newState.profilesInChannel, expectedState.profilesInChannel);
        });

        it('UserTypes.RECEIVED_PROFILES_IN_CHANNEL, existing profiles', () => {
            const state = {
                profilesInChannel: {
                    id: new Set().add('old_user_id'),
                    other_id: new Set().add('other_user_id'),
                },
            };
            const action = {
                type: UserTypes.RECEIVED_PROFILES_IN_CHANNEL,
                id: 'id',
                data: {
                    user_id: {
                        id: 'user_id',
                    },
                    user_id_2: {
                        id: 'user_id_2',
                    },
                },
            };
            const expectedState = {
                profilesInChannel: {
                    id: new Set().add('old_user_id').add('user_id').add('user_id_2'),
                    other_id: new Set().add('other_user_id'),
                },
            };

            const newState = reducer(state, action);
            assert.deepEqual(newState.profilesInChannel, expectedState.profilesInChannel);
        });

        it('UserTypes.RECEIVED_POSTS, no existing profiles', () => {
            const state = {
                profilesInChannel: {},
            };
            const action = {
                type: PostTypes.RECEIVED_POSTS,
                channelId: 'id',
                data: {
                    posts: [
                        {
                            user_id: 'user_id',
                        },
                        {
                            user_id: 'user_id_2',
                        },
                    ],
                },
            };
            const expectedState = {
                profilesInChannel: {
                    id: new Set().add('user_id').add('user_id_2'),
                },
            };

            const newState = reducer(state, action);
            assert.deepEqual(newState.profilesInChannel, expectedState.profilesInChannel);
        });

        it('UserTypes.RECEIVED_POSTS, existing profiles', () => {
            const state = {
                profilesInChannel: {
                    id: new Set().add('old_user_id'),
                    other_id: new Set().add('other_user_id'),
                },
            };
            const action = {
                type: PostTypes.RECEIVED_POSTS,
                channelId: 'id',
                data: {
                    posts: [
                        {
                            user_id: 'user_id',
                        },
                        {
                            user_id: 'user_id_2',
                        },
                    ],
                },
            };
            const expectedState = {
                profilesInChannel: {
                    id: new Set().add('old_user_id').add('user_id').add('user_id_2'),
                    other_id: new Set().add('other_user_id'),
                },
            };

            const newState = reducer(state, action);
            assert.deepEqual(newState.profilesInChannel, expectedState.profilesInChannel);
        });

        it('UserTypes.LOGOUT_SUCCESS, existing profiles', () => {
            const state = {
                profilesInChannel: {
                    id: new Set().add('old_user_id'),
                    other_id: new Set().add('other_user_id'),
                },
            };
            const action = {
                type: UserTypes.LOGOUT_SUCCESS,
            };
            const expectedState = {
                profilesInChannel: {},
            };

            const newState = reducer(state, action);
            assert.deepEqual(newState.profilesInChannel, expectedState.profilesInChannel);
        });
    });
});
