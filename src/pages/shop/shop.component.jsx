import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.action";

import CollectionsOverviewConatiner from "../../components/collection-overview/collection-overview.container";
import CollectionPageConatiner from "../collection/collection.container";

// import {
//   firestore,
//   convertCollectionsSnapshotToMap
// } from "../../firebase/firebase.utils";

class ShopPage extends React.Component {
  // state = {
  //   loading: true
  // };

  // unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();

    // get collection from fireStoe

    // const { updateCollection } = this.props;
    // const collectionRef = firestore.collection("collections");

    // fetch(
    //   `https://firestore.googleapis.com/v1/projects/crwn-clothing-a383b/databases/(default)/documents/collections`
    // )
    //   .then(response => response.json())
    //   .then(collections => console.log(collections));

    // collectionRef.get().then(snapshot => {
    //   const collectionMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollection(collectionMap);
    //   this.setState({ loading: false });
    // });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewConatiner}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageConatiner}
        />
      </div>
    );
  }
}

const mapDispatchToprops = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToprops)(ShopPage);
