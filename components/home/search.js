import { View, TextInput, Text, Image, FlatList } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS, SIZES, filterJobTypes, icons } from "../../constants";


export default function Search() {
  const activeFilter = "Full-time";
  return (
    <View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            style={styles.searchBtnIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* Filter Container */}
      <View style={styles.filterContainer}>
        <FlatList
          data={filterJobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.filter(activeFilter, item)}>
              <Text style={styles.filterTitle(activeFilter, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => `filter-job-${item}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ columnGap: SIZES.xSmall }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.xLarge,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    fontFamily: FONTS.medium
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnIcon: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  filterContainer: {
    alignItems: "center",
    marginTop: SIZES.xLarge,
  },
  filter: (activeFilterJob, item) => ({
    paddingVertical: 6,
    paddingHorizontal: SIZES.small,
    borderWidth: 1,
    borderColor: activeFilterJob === item ? COLORS.secondary : COLORS.lightWhite,
    backgroundColor: activeFilterJob === item ? COLORS.secondary : COLORS.lightWhite,
  }),
  filterTitle: (activeFilterJob, item) => ({
    color: activeFilterJob === item ? COLORS.white : COLORS.gray,
    fontFamily: FONTS.bold
  }),
});
