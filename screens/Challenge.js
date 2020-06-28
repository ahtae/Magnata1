import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";
import ConfettiCannon from "react-native-confetti-cannon";

const Challenge = ({ handleToggleStatus, challenge }) => {
  const [checked, setChecked] = useState(false);
  const [shoot, setShoot] = useState(false);

  const handleStatusClick = () => {
    handleToggleStatus(challenge);
    setChecked(!checked);
    setShoot(!shoot);
  };

  return (
    <>
      <Checkbox.Item
        styles={styles.checkbox}
        label={challenge}
        status={checked ? "checked" : "unchecked"}
        onPress={handleStatusClick}
      />
      {shoot ? (
        <ConfettiCannon count={200} origin={{ x: 0, y: 0 }} fadeOut={true} />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  checkbox: {},
});

export default Challenge;
