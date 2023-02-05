import React from "react";
import { Message } from "semantic-ui-react";

interface Props {
  errors: any;
}
export default function ValidationErrors({ errors }: Props) {
  return (
    <Message error>
      {errors && (
        <Message.Content>
          {errors.map((err: any, i: any) => (
            <Message.Item key={i}>{err}</Message.Item>
          ))}
        </Message.Content>
      )}
    </Message>
  );
}
