import { createClient, ResolveUsersOptions, ResolveMentionSuggestionsOptions } from '@liveblocks/client';
import { createRoomContext } from '@liveblocks/react';

const client = createClient({
  authEndpoint: (room) => {
    // The `room` argument will be `undefined` if you're using `useInboxNotifications`
    // Your authentication logic here
  },
  async resolveUsers({ userIds }) {
    // Your resolveUsers logic here
    return [];
  },
  async resolveMentionSuggestions({ text }) {
    // Your resolveMentionSuggestions logic here
    return [];
  },
});

type Presence = {
  // cursor: { x: number, y: number } | null,
  // ...
};

type Storage = {
  // author: LiveObject<{ firstName: string, lastName: string }>,
  // ...
};

type UserMeta = {
  // id?: string,  // Accessible through `user.id`
  // info?: Json,  // Accessible through `user.info`
};

type RoomEvent = {
  // type: "NOTIFICATION",
  // ...
};

export type ThreadMetadata = {
  // resolved: boolean;
  // quote: string;
  // time: number;
};

export const {
  RoomProvider,
  useRoom,
  useMyPresence,
  useUpdateMyPresence,
  useSelf,
  useOthers,
  useOthersMapped,
  useOthersConnectionIds,
  useOther,
  useBroadcastEvent,
  useEventListener,
  useErrorListener,
  useStorage,
  useObject,
  useMap,
  useList,
  useBatch,
  useHistory,
  useUndo,
  useRedo,
  useCanUndo,
  useCanRedo,
  useMutation,
  useStatus,
  useLostConnectionListener,
  useThreads,
  useUser,
  useCreateThread,
  useEditThreadMetadata,
  useCreateComment,
  useEditComment,
  useDeleteComment,
  useAddReaction,
  useRemoveReaction,
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent, ThreadMetadata>(client);

// Export createClient for custom resolveUsers logic
export { createClient };
