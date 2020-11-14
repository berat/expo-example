import React from "react";
import { TextInput } from "react-native";

import './input.scss';

export default function Input({...props}) {
  return (
    <TextInput
      className="input-type"
      {...props}
    />
  );
}
