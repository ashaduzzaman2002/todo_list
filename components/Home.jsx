import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useEffect, useState } from 'react';
const api_base = 'http://localhost:8080';

const Home = () => {
  const [todos, setTodos] = useState([
    {
      _id: 'fhjgj002',
      text: 'Sleep',
      isComplete: false
    },
    {
      _id: 'sadsadsaff',
      text: 'Code',
      isComplete: true
    },

  ]);

  const [popupActive, setPopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState('');

  const GetTodos = async () => {
    // const data = ''
    // setTodos(data);
  };

  const completeTodo = async (id) => {
    // const { data } = await axios.get(api_base + "/todo/complete/" + id);
    // setTodos((todos) =>
    //   todos.map((todo) => {
    // 	if(todo._id){
    // 		if (todo._id === data._id) {
    // 			todo.complete = data.complete;
    // 		  }
    // 	}
    //     return todo;
    //   })
    // );
  };

  const addTodo = async () => {
    // const { data } = await axios.post(api_base + "/todo/add", {
    //   text: newTodo,
    // });
    // console.log(data);
    // setTodos([...todos, data]);
    setPopupActive(false);
    setNewTodo('');
  };

  const deleteTodo = async (id) => {
    // if (id) {
    //   await axios.delete(api_base + "/todo/delete/" + id)
    // }
  };

  useEffect(() => {
    GetTodos();
  });
  return (
    <View style={styles.app}>
      <Text style={styles.heading}>Welcome, Ashadu</Text>
      <Text style={styles.subHeading}>Your tasks</Text>

      <View>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <View
              //   className={"todo" + (todo.complete ? " isComplete" : "")}
              style={styles.todo}
              key={todo._id}
              onClick={() => completeTodo(todo._id)}
            >
              <View style={[styles.checkbox, todo.isComplete && styles.completeCheckBox]}></View>

              <Text style={[styles.text, todo.isComplete && styles.completeText]}>{todo.text}</Text>

              <Text style={styles.deleteTodo}>
                <TouchableOpacity activeOpacity={0.7} style={styles.deleteBtn}>
                  <Text style={{ color: '#eee' }}>X</Text>
                </TouchableOpacity>
              </Text>
            </View>
          ))
        ) : (
          <Text style={styles.text}>You currently have no tasks</Text>
        )}
      </View>

      <View style={styles.addPopup}>
        <TouchableOpacity
          onPress={() => setPopupActive(true)}
          activeOpacity={0.7}
          style={styles.addBtn}
        >
          <Text style={{ fontSize: 30, color: '#eee' }}>+</Text>
        </TouchableOpacity>
      </View>

      {popupActive && (
        <View style={styles.popup}>
          <Text style={[styles.deleteTodo, styles.closePopup]}>
            <TouchableOpacity onPress={() => setPopupActive(false)}  activeOpacity={0.7} style={styles.deleteBtn}>
              <Text style={{ color: '#eee' }}>X</Text>
            </TouchableOpacity>
          </Text>
          <View className="content">
            <Text style={styles.popupHeading}>Add Task</Text>
            <TextInput
              type="text"
              style={styles.todoInput}
              onChange={(e) => setNewTodo(e.target.value)}
              value={newTodo}
            />
            <Text style={styles.button} onPress={addTodo}>
              Create Task
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  app: {
    padding: 32,
  },
  heading: {
    color: '#eee',
    fontSize: 35,
    fontWeight: '600',
    marginBottom: 32,
  },

  subHeading: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: '400',
    marginBottom: 18,
    color: '#61759b',
  },

  todo: {
    position: 'relative',
    backgroundColor: '#131a26',
    padding: 16,
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    transition: '0.5s',
  },

  text: {
    color: '#eee',
    fontSize: 20,
  },


  completeText: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },

  completeCheckBox: {
    backgroundColor: '#d81e58',
  },

  
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 16,
    borderRadius: 999,
    backgroundColor: '#202b3e',
    transition: '0.4s',
  },

  deleteTodo: {
    position: 'absolute',
    right: 18,
    transform: [{ translateX: -50 }],
  },

  deleteBtn: {
    width: 25,
    height: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#af1a2d',
    borderRadius: 999,
  },

  addPopup: {
    position: 'absolute',
    top: '220%',
    right: 32,
  },

  addBtn: {
    height: 60,
    width: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#af1a2d',
    borderRadius: 999,
  },

  popup: {
    // position: fixed;
    // top: 50%;
    // left: 50%;
    // transform: [translate(-50, -50%)],
    marginTop: 10,
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#eee',
    paddingHorizontal: 20,
    paddingVertical: 32,
    borderRadius: 16,
    // box-shadow: 0px 3px 24px var(--dark);
  },

  closePopup: {
    position: 'absolute',
    top: 16,
    right: 16, 
  },

  popupHeading: {
    color: '#131a26',
    marginBottom: 16,
    fontWeight: '400',
    fontSize: 20,
    textTransform: 'uppercase',
  },

  todoInput: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 15,
    width: '100%',
    fontSize: 24,
  },

  button: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 99,
    backgroundColor: '#af1a2d',
    color: '#eee',
    fontSize: 18,
    marginTop: 20,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

// --primary: #d81e58;
//   --secondary: #8a4efc;
//   --light: #eee;
//   --light-alt: #61759b;
//   --dark: #131a26;
//   --dark-alt: #202b3e;
