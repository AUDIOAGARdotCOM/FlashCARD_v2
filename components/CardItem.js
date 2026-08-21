import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable
} from 'react-native';

export default function CardItem({
  name,
  category,
  onPress
}) {
  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.icon}>
        <Text style={styles.iconText}>
          💳
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.name}>
          {name}
        </Text>

        <Text style={styles.category}>
          {category}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0'
  },

  icon: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#E4F3EC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12
  },

  iconText: {
    fontSize: 20
  },

  content: {
    flex: 1
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#17392D'
  },

  category: {
    marginTop: 4,
    color: '#666666'
  }
});
