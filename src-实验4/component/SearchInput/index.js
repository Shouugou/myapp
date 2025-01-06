import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function SearchInput() {
    const [query, setQuery] = useState("");
    const history = useHistory();

    const handleSearch = () => {
        if (query.trim()) {
            history.push(`/search?query=${encodeURIComponent(query)}`); // 编程式导航传递参数
        }
    };

    return (
        <>
            <input
                type="text"
                placeholder="搜索"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>搜索</button> {/* 可以替换为图标 */}
        </>
    );
}
