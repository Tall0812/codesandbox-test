import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、取得後初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから削除する関数
const deleteFromIncompleteList = (target) => {
  // 押された削除ボタンの親タグdivを未完了リストから削除
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = text;

  //完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // 完了ボタンが押された場合のアクション
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンを未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストへ追加する要素
    const addTarget = completeButton.parentNode;

    // ToDoないテキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグ生成
    const li２ = document.createElement("li");
    li２.innerText = text;

    // 戻すボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // 戻すボタンが押された場合のアクション
    backButton.addEventListener("click", () => {
      // 押された親タグ<div>を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキストの取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストへ追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除ボタンを生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグdivを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストへ追加
  document.getElementById("incomplete-list").appendChild(div);
};

// メイン処理　ToDo追加ボタンを押した場合のアクション onClickAddを実行jikkou
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
