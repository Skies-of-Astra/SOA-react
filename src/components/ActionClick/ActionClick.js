/**
 *
 * @param {{cssClass:string, callBack:function, callBackArgs:function}} props
 */

const ActionClick = (props) => {
  const callBackAction = () => {
    props.callBack(props.callBackArgs);
  };
  return (
    <div className={props.cssClass} onClick={callBackAction}>
      {props.children}
    </div>
  );
};

export default ActionClick;
