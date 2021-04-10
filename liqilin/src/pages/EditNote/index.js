import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import IconFont from '../../components/iconfont';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import Textarea from '../../components/Textarea/Textarea';
import { useState } from 'react';
import {
  setStorage,
  getuuid,
  changeStorageItem,
} from '../../utils/storageUtils';
import { useEffect } from 'react';

const EditNote = (props) => {
  const navigation = useNavigation();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [nowDate, setNowDate] = useState(dayjs().format('YYYY-MM-DD HH:mm'));

  const params = props.route.params;

  const saveTitle = (text) => {
    setTitle(text);
  };

  const saveContent = (text) => {
    setContent(text);
  };

  useEffect(() => {
    if (params) {
      setTitle(params.title);
      setContent(params.content);
      setNowDate(params.time);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlerSave = () => {
    const noteData = {
      time: nowDate,
      title,
      content,
      id: getuuid(),
    };
    if (params) {
      noteData.id = params.id;
      changeStorageItem(noteData, 'update').then(() => {
        navigation.goBack();
      });
    } else {
      setStorage(noteData).then(() => {
        navigation.goBack();
      });
    }
  };
  return (
    <View style={styles.main}>
      <View style={styles.pageHeader}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <IconFont type={'\ue744'} fontSize={40} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlerSave}>
          <IconFont type={'\ue665'} fontSize={40} />
        </TouchableOpacity>
      </View>
      <View style={styles.pageMain}>
        <TextInput
          placeholder="请输入标题"
          style={styles.titleInput}
          onChangeText={saveTitle}
          value={title}
        />
        <Text style={styles.nowDate}>{nowDate}</Text>
        <Textarea
          placeholder="请输入内容"
          style={styles.textareaSty}
          maxLength={1000}
          onChangeText={saveContent}
          value={content}
        />
      </View>
    </View>
  );
};
export default EditNote;
const styles = StyleSheet.create({
  main: { flex: 1 },
  pageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  pageMain: {
    flex: 1,
    paddingHorizontal: 12,
  },
  nowDate: {
    fontSize: 12,
    color: '#ccc',
  },
  titleInput: {
    paddingVertical: 12,
    fontSize: 16,
    fontWeight: '700',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 6,
  },
});
