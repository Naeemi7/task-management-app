import PropTypes from "prop-types";
import Icon from "@reusable/Icon";

const DashboardNavItems = ({ item }) => {
  return (
    <li>
      <Icon library={item.library} name={item.name} />
      <span>{item.label}</span>
    </li>
  );
};

export default DashboardNavItems;

DashboardNavItems.propTypes = {
  item: PropTypes.object,
};
