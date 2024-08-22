"use client";
import { COLORS } from "@/constants/theme";
import DoneIcon from "@mui/icons-material/Done";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDataList,
  setListDataList,
  setEditList,
} from "@/store/SectionSlice";
import EditIcon from "@mui/icons-material/Edit";
import SaveAsIcon from "@mui/icons-material/SaveAs";

export default function List(props) {
  const [id, setId] = useState();
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [errorList, setErrorList] = useState("");
  const [formList, setFormList] = useState(true);
  const [edit, setEditItem] = useState(false);

  const ListData = useSelector(
    (state) => state.Section.ListDataList[props.index]
  );

  const dispatch = useDispatch();

  const Data = {
    title,
  };

  useEffect(() => {
    if (props.index >= 0) {
      dispatch(setDataList({ index: props.index, data: Data }));
    }
    dispatch(setListDataList({ index: props.index, data: list }));
  }, [title, props.index, dispatch]);

  const handleDelete = (Id) => {
    setList((prev) => prev.filter((e) => e.id !== Id));
    list.length == 1 && setFormList(true);
  };
  const handleForm = () => {
    dispatch(setEditList({ index: props.index, data: false }));
    setEditItem(false);
    setTitle("");
    setErrorList("");
    setFormList(true);
  };
  const deleteForm = () => {
    setTitle("");
  };
  const handleAdd = () => {
    if (title.trim() === "") {
      setErrorList("title is required");
      return;
    }
    if (list.some((e) => e.title.toLowerCase() === title.toLowerCase())) {
      setErrorList("title already exists");
      return;
    }
    setList([
      ...list,
      {
        id: list.length == 0 ? 1 : list[list.length - 1].id + 1,
        title,
      },
    ]);
    setTitle("");
    setErrorList("");
    setFormList(false);
  };
  const handleEdit = (id) => {
    setFormList(true);
    const item = list.find((e) => e.id === id);
    if (item) {
      setId(item.id);
      setTitle(item.title);
      setEditItem(true);
      dispatch(setEditList({ index: props.index, data: true }));
    }
  };
  const handleUpdate = () => {
    if (!title) {
      setErrorList("Title is required");
      return;
    }
    const updatedList = list.map((item) =>
      item.id === id
        ? {
            id,
            title,
          }
        : item
    );
    dispatch(setEditList({ index: props.index, data: false }));
    setList(updatedList);
    setFormList(false);
    setEditItem(false);
    setId(null);
    setErrorList("");
    setTitle("");
  };
  return (
    <div>
      {formList && (
        <div className="py-2 px-4 border-2 border-gray-300 rounded-lg">
          <div className="my-2">
            <label htmlFor="title" className="ps-1 text-sm text-gray-500">
              title
            </label>
            <input
              type="text"
              id="title"
              placeholder="title"
              className="rounded-md w-full p-2 mt-1"
              style={{ backgroundColor: COLORS.bg }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errorList && (
              <div>
                <div className="text-red-500 text-sm">{errorList}</div>
              </div>
            )}
          </div>
          <div className="flex flex-row justify-end">
            <button
              className="p-1 text-red-600 hover:text-red-500 me-2"
              onClick={deleteForm}
            >
              <DeleteForeverIcon />
            </button>
            {edit ? (
              <button
                onClick={handleUpdate}
                className="p-1 text-white bg-blue-950 hover:border-blue-950 bottom-2 border-2 rounded-lg hover:bg-white hover:text-blue-950"
              >
                <SaveAsIcon /> Update
              </button>
            ) : (
              <button
                onClick={handleAdd}
                className="p-1 pe-2 text-white bg-blue-950 hover:border-blue-950 bottom-2 border-2 rounded-lg hover:bg-white hover:text-blue-950"
              >
                <DoneIcon /> Done
              </button>
            )}
          </div>
        </div>
      )}
      {list.length > 0 && (
        <div className="">
          {ListData.map((item, i) => (
            <div
              key={i}
              className="p-2 border-2 border-gray-500 rounded-lg my-1 flex flex-row justify-between items-center"
            >
              <div>
                <p>{item.title}</p>
              </div>
              <div>
                <button
                  className="p-1 text-blue-900 hover:text-gray-500 me-2"
                  onClick={() => handleEdit(item.id)}
                >
                  <EditIcon />
                </button>
                <button
                  className="p-1 text-red-600 hover:text-red-500 me-2"
                  onClick={() => handleDelete(item.id)}
                >
                  <DeleteForeverIcon />
                </button>
              </div>
            </div>
          ))}
          <div className="">
            <button
              className="p-1 mt-2 text-blue-950 bg-white border-blue-950 bottom-2 border-2 rounded-lg hover:bg-blue-950 hover:text-white"
              onClick={handleForm}
            >
              <AddIcon /> Add title
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
