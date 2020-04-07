import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.action";

import CollectionsOverviewConatiner from "../../components/collection-overview/collection-overview.container";
import CollectionPageConatiner from "../collection/collection.container";

const ShopPage = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

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
};

const mapDispatchToprops = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToprops)(ShopPage);
