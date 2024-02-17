import React from 'react'; // Import React if not already imported
import Cursor from './Cursor';
import { LiveCursorProps } from '@/types/type';
import { COLORS } from '@/constants/index';

const LiveCursors: React.FC<LiveCursorProps> = ({ others }) => {
  return (
    <>
      {others.map(({ connectionId, presence }) => {
        if (!presence?.cursor) return null;

        return (
          <Cursor
            key={connectionId}
            color={COLORS[Number(connectionId) % COLORS.length]}
            x={presence.cursor.x}
            y={presence.cursor.y}
            message={presence.message}
          />
        );
      })}
    </>
  );
};

export default LiveCursors;
