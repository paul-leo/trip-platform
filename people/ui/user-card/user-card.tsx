import type { ReactNode } from 'react';
import { User } from '@nore-work/people.entities.user';
import { Card } from '@pied/design.content.card';
import { Heading } from '@bitdesign/sparks.typography.heading';
import { Text } from '@bitdesign/sparks.typography.text';

export type UserCardProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;

  /**
   * user entity to display
   */
  user?: User;
};

export function UserCard({ children, user }: UserCardProps) {
  return (
    <Card>
      <Heading level={2}>{user.displayName}</Heading>
      <Text element='div'><span>@</span>{user.username}</Text>
      {children}
    </Card>
  );
}
