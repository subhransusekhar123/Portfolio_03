import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';

// Form Validation
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup
                    .number()
                    .min(8, "Should be min of 4 characters.")
                    .max(12,'should be max of 12 character')
                    .required("Length is required"),
})

export default function App() {
  const [password, setPassword] = useState("");
  const [isPasswordGenerated, setPasswordGenerator] = useState(false);

  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setupperCase]  = useState(false);
  const [numbers, useNumbers]  = useState(false);
  const [symbols, useSymbols]  = useState(false);

  const generatePasswordString = (passwordLength : number) => {
    //
  }


  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})