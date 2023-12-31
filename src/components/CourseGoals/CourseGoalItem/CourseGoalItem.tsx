import "./CourseGoalItem.css";

const CourseGoalItem = (props: {
  children: any;
  id: string;
  onDelete: (id: string) => void;
}) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
