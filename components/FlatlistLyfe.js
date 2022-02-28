import { View, Text,FlatList } from 'react-native'
import React from 'react'


  return (
    <View>
        <Flatlist
              data={[
                {
                  key: "Carried Out everday tasks as part of ongoing research study",
                },
                {
                  key: "Reported findings contributed hypothesis and helped co-author a prffesional findings report",
                },
              ]}
              renderItem={({ item }) => <Text>{item.key}</Text>}
            />
    </View>
  )
}

export d  <Flatlist
              data={[
                {
                  key: "Carried Out everday tasks as part of ongoing research study",
                },
                {
                  key: "Reported findings contributed hypothesis and helped co-author a prffesional findings report",
                },
              ]}
              renderItem={({ item }) => <Text>{item.key}</Text>}
            />