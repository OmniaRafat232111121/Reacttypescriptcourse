interface  AppProps{
  headerText:st
}
export default function App({headerText}:AppProps){
  return(
    <>
    <h1>{headerText}</h1>
    </>

  );
}